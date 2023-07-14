import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + '' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    {id: 1, name: 'Valeriy'},
    {id: 2, name: 'EvilArthas'},
    {id: 3, name: 'TorontoTokyo'},
    {id: 4, name: 'BadComedian'},
    {id: 5, name: 'Solo from 9Pandas'},
    {id: 6, name: 'Ramzes 666'},
    {id: 7, name: 'Gabe Neuwell'},
  ];
  let messagesData = [
    {id: 1, message: 'This is fine...'},
    {id: 2, message: 'KK'},
    {id: 3, message: 'qq how are you?'},
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name="TorontoTokyo" id="3" />
        <DialogItem name="BadComedian" id="4" />
        <DialogItem name="Solo from 9Pandas" id="5" />
        <DialogItem name="Ramzes 666" id="6" />
        <DialogItem name="Gabe Neuwell" id="7" />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} id={dialogsData[0].id} />
        <Message message={messagesData[1].message} id={dialogsData[1].id} />
        <Message message={messagesData[2].message} id={dialogsData[2].id} />
      </div>
    </div>
  );
};

export default Dialogs;
