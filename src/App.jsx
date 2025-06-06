import './App.css'
import Header from './components/Header/Header'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import JournalList from './components/JournalList/JournalList'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'
import useLokalStorage from './hooks/use-localstorage.hook'
import { UserContextProvider } from './context/user.context'

const mapItems = (items) => {
  if(!items){
    return []
  }
  return items.map(i => ({
    ...i,
    date: new Date(i.date),
  }))
}
function App() {

  const [items, setItems] = useLokalStorage('data');

  const addItem = (item) => {
    setItems([...mapItems(items), {
      ...items,
      // title: item.title,
      date: new Date(item.date),
      // text: item.text,
      // tag: item.tag,
      id: items.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
    }])
  }

  return (
    <UserContextProvider>
      <div className='app'>
        <LeftPanel>
          <Header />
          <JournalAddButton />
          <JournalList items={mapItems(items)} />
        </LeftPanel>
        <Body>
          <JournalForm onSubmit={addItem}/>
        </Body>
      </div>
    </UserContextProvider>
  )
}

export default App
