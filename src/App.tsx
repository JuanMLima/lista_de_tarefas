import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';

const App = () => {
    const [list, setList] = useState<Item[]>([
        { id: 1, name: 'comprar o pão na padaria', done: false },
        { id: 2, name: 'Comprar leite', done: false },

    ]);

    return (
        <C.Container>
            <C.Area>
                <C.Header>Lista de tarefas</C.Header>

                {/* Área para adicionar nova tarefa */}

                {list.map((item, index) => (
                    <div>{item.name}</div>
                ))}
            </C.Area>
        </C.Container>
        );
    }

export default App;