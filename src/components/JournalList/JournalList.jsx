import { useContext, useMemo } from 'react';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';
import { UserContext } from '../../context/user.context';

const JournalList = ({items, setItem}) => {
  const { userId } = useContext(UserContext);

	const sortItems = (a, b) => {
    if (a.date < b.date){
      return 1
    }else{
      return -1
    }
  }

  const filteredItems = useMemo(() => items
		.filter(el => el.userId === userId)
		.sort(sortItems), [items, userId]);

	if (items.length === 0) {
		return <p>Записей пока нет, добавьте первую</p>;
	}

  return (
	<div className='journal-list'>
		{filteredItems.map(item => {
            return(
                <CardButton key={item.id} onClick={() => setItem(item)}>
                  <JournalItem title={item.title} date={item.date} post={item.post} tag={item.tag} />
                </CardButton>
            )
          })}
	</div>
  )
}

export default JournalList;