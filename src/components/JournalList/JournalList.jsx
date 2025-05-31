import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';

const JournalList = ({items}) => {

	if(items.length === 0){
		return <p>Записей пока нет, добавьте первую</p>
	}

	const sortItems = (a, b) => {
    if (a.date < b.date){
      return 1
    }else{
      return -1
    }
  }

  return (
	<div className='journal-list'>
		{items.sort(sortItems).map(item => {
            return(
                <CardButton key={item.id}>
                  <JournalItem title={item.title} date={item.date} post={item.post} tag={item.tag} />
                </CardButton>
            )
          })}
	</div>
  )
}

export default JournalList;