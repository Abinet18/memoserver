
import Card from '../components/cards/Card';
import CardContainer from '../components/cards/CardContainer';
import Memos from './Memo';
import { MemoProvider } from '../state/context';

function App() {
  
  return (
    <MemoProvider>
    <CardContainer xs={12} direction="row" >
      <Card lg={4} md={2} xs={1} ><div></div></Card>
      <Card lg={4} md={8} xs={10}>
        <h1>Memoirs App</h1>
      <Memos />
      </Card>
      <Card lg={4} md={2} xs={1}><div></div></Card>
    </CardContainer>
    </MemoProvider>
  );
}

export default App;
