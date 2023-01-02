import React, { useRef, useState } from 'react';
import GridItem from '../Views/GridItem';
import Label from '../Inputs/Label';
import GridContainer from '../Views/GridContainer';
import { dragStyles } from '../styles/styles';
import cx from 'classnames';
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from 'react-beautiful-dnd';
import { MatchGroups } from '../types/types';

type Props = {
  label: string;
  list: string[];
  onChange: (list: string[]) => void;
  renderItem: (item: string) => JSX.Element;
  groupId: string;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    groupId: string,
    index: number,
  ) => void;
  //   onDragEnd: () => void;
  onDragExit: () => void;
  onDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    groupId: string,
    index: number,
  ) => void;
  dragging: boolean;
  dragSourceNode: any;
};

const DraggableList = ({
  label,
  list,
  groupId,
  renderItem,
  onChange,
  dragSourceNode,
  dragging,
  onDragEnter,
  onDragStart,
  onDragExit,
}: Props) => {
  const classes = dragStyles();
  return (
    <GridContainer xs className={classes.dragGroup}>
      <GridItem xs={12}>
        <Label label={label} />
      </GridItem>
      <GridItem xs={12}>
        <div
          style={{ minHeight: 40 }}
          onDragEnter={
            list.length === 0 ? (e) => onDragEnter(e, groupId, 0) : undefined
          }>
          {list.map((item, index) => (
            <DragItem
              item={item}
              index={index}
              groupId={groupId}
              renderItem={renderItem}
              onDragEnter={onDragEnter}
              onDragStart={onDragStart}
              // onDragEnd={onDragEnd}
              onDragExit={onDragExit}
              dragging={dragging && dragSourceNode.current?.index === index}
            />
          ))}
        </div>
      </GridItem>
    </GridContainer>
  );
};

export default DraggableList;

type DragItemProps = {
  item: string;
  index: number;
  groupId: string;
  renderItem: (item: string) => JSX.Element;
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    groupId: string,
    index: number,
  ) => void;
  //   onDragEnd: () => void;
  onDragExit: () => void;
  onDragEnter: (
    e: React.DragEvent<HTMLDivElement>,
    groupId: string,
    index: number,
  ) => void;
  dragging: boolean;
};

export const DragItem = ({
  item,
  index,
  groupId,
  renderItem,
  onDragStart,
  //   onDragEnd,
  onDragEnter,
  onDragExit,
  dragging,
}: DragItemProps) => {
  const classes = dragStyles();
  return (
    <div
      className={cx(classes.dragItem, dragging ? classes.draggingItem : null)}
      draggable
      onDragStart={(e) => onDragStart(e, groupId, index)}
      //   onDragEnd={onDragEnd}
      onDragEnter={(e) => onDragEnter(e, groupId, index)}
      onDragExit={onDragExit}>
      {renderItem(item)}
    </div>
  );
};

export const DraggableExample = () => {
  const [groups, setGroups] = useState<{
    [key: string]: { title: string; list: string[] };
  }>({
    unmatched: {
      title: 'Choose from these',
      list: [
        'Watch the Premier League',
        'Watch the news',
        'Develop and maintain code',
      ],
    },
    selected: {
      title: 'Selected',
      list: [],
    },
  });
  const onChange = (groups: any) => {
    setGroups({ ...groups });
  };

  const dragSourceNode = useRef<{ groupId: string; index: number }>();
  const dragTargetNode = useRef<{ groupId: string; index: number }>();
  const dragNode = useRef<EventTarget>();
  const [dragging, setDragging] = useState(false);

  const onDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    groupId: string,
    index: number,
  ) => {
    dragSourceNode.current = { groupId, index };
    dragNode.current = e.target;
    dragNode.current.addEventListener('dragend', onDragEnd);
    setDragging(true);
  };
  const dragAction = () => {
    const dragSource = dragSourceNode.current;
    const dragTarget = dragTargetNode.current;
    if (dragSource && dragTarget && dragSource !== dragTarget) {
      groups[dragTarget.groupId].list.splice(
        dragTarget.index,
        0,
        groups[dragSource.groupId].list.splice(dragSource.index, 1)[0],
      );
      onChange(groups);
      dragSourceNode.current = undefined;
      dragTargetNode.current = undefined;
    }
  };
  const onDragEnd = () => {
    console.log('drag ended');
    dragNode.current?.removeEventListener('dragend', onDragEnd);
    dragNode.current = undefined;

    setDragging(false);
  };

  const onDragEnter = (e: any, groupId: string, index: number) => {
    dragTargetNode.current = { groupId, index };
    dragAction();
    dragSourceNode.current = { groupId, index };
    dragTargetNode.current = undefined;
  };

  const onDragExit = () => {
    dragTargetNode.current = undefined;
  };

  const renderItem = (item: string) => <p>{item}</p>;
  return (
    <GridContainer>
      <GridItem xs={6}>
        <DraggableList
          groupId={'unmatched'}
          label={'Choose from these'}
          list={groups.unmatched.list}
          onChange={onChange}
          renderItem={renderItem}
          onDragEnter={onDragEnter}
          onDragStart={onDragStart}
          onDragExit={onDragExit}
          dragSourceNode={dragSourceNode}
          dragging={dragging}
        />
      </GridItem>
      <GridItem xs={6}>
        <DraggableList
          groupId={'selected'}
          label={'Selected'}
          list={groups.selected.list}
          onChange={onChange}
          renderItem={renderItem}
          onDragEnter={onDragEnter}
          onDragStart={onDragStart}
          onDragExit={onDragExit}
          dragSourceNode={dragSourceNode}
          dragging={dragging}
        />
      </GridItem>
    </GridContainer>
  );
};

type MathDNDProps = {
  matches: string;
  onChange: (matches: string) => void;
};
export const MatchDND = ({ matches, onChange }: MathDNDProps) => {
  const groups: MatchGroups = JSON.parse(matches);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (source && destination) {
      groups[destination.droppableId].list.splice(
        destination.index,
        0,
        groups[source.droppableId].list.splice(source.index, 1)[0],
      );
      onChange(JSON.stringify(groups));
    }
  };

  const renderItem = (item: string) => <div>{item}</div>;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <GridContainer>
        <GridItem xs={6}>
          <DroppbaleList
            droppableId={'unmatched'}
            groups={groups}
            renderItem={renderItem}
          />
        </GridItem>
        <GridItem xs={6}>
          {Object.keys(groups)
            .filter((key) => key !== 'unmatched')
            .map((key) => (
              <DroppbaleList
                droppableId={key}
                groups={groups}
                renderItem={renderItem}
              />
            ))}
        </GridItem>
      </GridContainer>
    </DragDropContext>
  );
};

type DroppableListProps = {
  droppableId: string;
  groups: { [key: string]: { title: string; list: string[] } };
  renderItem: (item: string) => JSX.Element;
};

const DroppbaleList = ({
  droppableId,
  groups,
  renderItem,
}: DroppableListProps) => {
  const classes = dragStyles();
  return (
    <Droppable droppableId={droppableId} key={droppableId}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={cx(
              classes.dragGroup,
              snapshot.isDraggingOver ? classes.draggingOver : null,
            )}>
            <Label label={groups[droppableId].title} />
            {groups[droppableId].list.map((item, index) => {
              return (
                <Draggable key={item} draggableId={item} index={index}>
                  {(provided, snapshot) => {
                    return (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={cx(
                          classes.dragItem,
                          snapshot.isDragging ? classes.draggingItem : null,
                        )}>
                        {renderItem(item)}
                      </div>
                    );
                  }}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </div>
        );
      }}
    </Droppable>
  );
};
