import './TodoSearch.css';

function TodoSearch() {
  return (
    <input 
      className="TodoSearch" 
      placeholder="Cortar cebolla" 
      onChange={(event) => {
        console.log('Escribiste en el TODO Search');
        console.log(event);
        console.log(event.target.value);
      }}
    />
  );
}

export { TodoSearch };