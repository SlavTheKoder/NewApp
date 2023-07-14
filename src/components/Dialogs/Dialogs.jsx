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
  let dialogs = [
    {id: 1, name: 'Valeriy'},
    {id: 2, name: 'EvilArthas'},
    {id: 3, name: 'TorontoTokyo'},
    {id: 4, name: 'BadComedian'},
    {id: 5, name: 'Solo from 9Pandas'},
    {id: 6, name: 'Ramzes 666'},
    {id: 7, name: 'Gabe Neuwell'},
  ];
  let messages = [
    {id: 1, message: 'This is fine...'},
    {id: 2, message: 'KK'},
    {id: 3, message: 'qq how are you?'},
  ];

  let dialogElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messagesElements = messages.map((m) => (
    <Message message={m.message} id={m.id} />
  ));
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogElements}</div>
      <div className={s.messages}>{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
