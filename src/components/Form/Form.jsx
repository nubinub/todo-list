import React, {useRef} from 'react';

const Form = ({addTodo}) => {
    const input = useRef(null);

    const handleSumbit = (event) => {
        if (input.current.value) {
            addTodo(input.current.value);

            input.current.value = '';
        }
        event.preventDefault();
    };

    return (
        <form onSubmit={handleSumbit}>
            <input type="text" ref={input} />
            <input type="submit" value="Add"/>
        </form>
    );
};

export default Form;