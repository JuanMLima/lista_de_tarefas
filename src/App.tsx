import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';
const App = () => {
    const [list, setList] = useState<Item[]>([
    
    ]);

    const handleAddTask = (TaskName: string) =>{
        let newList= [...list];
        newList.push({
            id: list.length+1,
            name:TaskName,
            done:false,
        });

        setList(newList);

    }

    return (
        <C.Container>
            <C.Area>
                <C.Header>Lista de tarefas</C.Header>

                <AddArea onEnter={handleAddTask}/>

                {list.map((item, index)=>(
                    <ListItem key={index} item={item} />
                ))}
            </C.Area>
        </C.Container>
        );
    }

export default App;