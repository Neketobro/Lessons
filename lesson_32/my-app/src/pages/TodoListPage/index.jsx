import { Footer, Header, PageLayout } from '../../components';
import { Box, Button, Input, FormControl, FormHelperText, InputLabel, Card, CardContent, Typography, CardActions } from '@mui/material';
import { useState, useRef } from 'react';

export function TodoListPage() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);

    function CreateTodo({ name, index, onDelete }) {
        return (
            <Box sx={{ minWidth: 600 }} id={index}>
                <Card variant="outlined">
                    <CardContent sx={{ display: 'flex' }}>
                        <Typography>
                            Title your todo: {name}
                        </Typography>
                    </CardContent>
                    <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
                        <Button size="small" onClick={() => onDelete(index)}>Delete</Button>
                    </CardActions>
                </Card>
            </Box>
        )
    }

    function addTodo() {
        if (inputRef.current.value.trim() === '') return;
        setTodos([...todos, inputRef.current.value]);
        inputRef.current.value = '';
    }

    function deleteTodo(index) {
        setTodos(todos.filter((_, i) => i !== index));
    }

    return (
        <PageLayout
            renderFooter={() => <Footer />}
            renderHeader={() => <Header />}
            renderMain={() => (
                <Box sx={{ width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <FormControl sx={{ display: 'flex', alignItems: 'center', }}>
                        <InputLabel htmlFor="my-input">Name todo</InputLabel>
                        <Input id="my-input" aria-describedby="my-helper-text" inputRef={inputRef} />
                        <FormHelperText id="my-helper-text">Please enter name for your todo.</FormHelperText>
                        <Button type="button" variant="contained" onClick={addTodo}>Send</Button>
                    </FormControl>

                    <Box sx={{ width: '80%', padding: '20px', display: 'flex', alignItems: 'center', flexDirection: 'column', gap: '10px' }}>
                        {todos.map((todo, index) => (
                            <CreateTodo key={index} name={todo} index={index} onDelete={deleteTodo} />
                        ))}
                    </Box>
                </Box>
            )}
        />
    )
}

// export default function OutlinedCard() {
//     return (
//         <Box sx={{ minWidth: 250 }}>
//             <Card variant="outlined">
//                 <CardContent sx={{ display: 'flex' }}>
//                     <Typography gutterBottom sx={{ color: 'text.secondary', marginRight: '5px' }}>
//                         Title your todo:
//                     </Typography>
//                     <Typography >
//                         Name
//                     </Typography>
//                 </CardContent>
//                 <CardActions sx={{ display: 'flex', justifyContent: 'end' }}>
//                     <Button size="small">Delete</Button>
//                 </CardActions>
//             </Card>
//         </Box>
//     );
// }