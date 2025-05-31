import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import JournalAddButton from './components/JournalAddButton/JournalAddButton'
import JournalForm from './components/JournalForm/JournalForm'
import JournalList from './components/JournalList/JournalList'
import Body from './layouts/Body/Body'
import LeftPanel from './layouts/LeftPanel/LeftPanel'

const INITIAL_DATA = [
    // {
    //   id: 1,
    //   title: 'title1',
    //   date: new Date(),
    //   text: 'post1',
    //   tag: 'tag',
    // },
    // {
    //   id: 2,
    //   title: 'title2',
    //   date: new Date(),
    //   text: 'post2',
    //   tag: 'tag',
    // },
  ]

function App() {

  const [items, setItems] = useState(INITIAL_DATA);

  const addItem = (item) => {
    setItems(oldItems => [...oldItems, {
      title: item.title,
      date: new Date(item.date),
      text: item.text,
      tag: item.tag,
      id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1
    }])
  }

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList items={items} />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem}/>
      </Body>
    </div>
  )
}

export default App
