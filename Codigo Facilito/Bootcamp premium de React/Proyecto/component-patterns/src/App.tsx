import './App.css';
import Title from './components/migrated/Title';
// import withAuth from './components/migrated/withAuth';
// import CompoundList from './components/migrated/CompoundList';
// import Card from './components/migrated/Card';

const App = () => { 
  return (
    <div>
      <Title>Bienvenidos a mi pagina</Title>
      <Title as="h4">Hola Mundo</Title>
      <Title as="h5">Juan Jose Ortiz</Title>
      {/*<CompoundList>
        <CompoundList.Item style={{ color: 'red' }}>Item 1</CompoundList.Item>
        <CompoundList.Item className='item-two'>Item 2</CompoundList.Item>
        <CompoundList.Item style={{ color: 'blue' }}>Item 3</CompoundList.Item>
      </CompoundList>
      <Card>
        <Card.Content>
          Soy el content
        </Card.Content>
      </Card>*/}
    </div>
  );
}
 // withRouter(App);
//export default withAuth(App);
export default App;
