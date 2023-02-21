import React from 'react'
import {useDispatch, useSelector,useStore} from 'react-redux'
import {useForm} from 'react-hook-form';
import { chooseAuthor, chooseTitle, chooseLanguage, choosePublisher} from '../../redux/slices/RootSlice';
import {Input} from '../SharedComponents/Input';
import {Button} from '@material-ui/core';
import {server_calls} from '../../api';

interface TheShelfProps {
    id?:string;
    data?:{}
}

interface TheShelfState {
    author: string;
    title: string;
    language: string;
    publisher: string;
}

export const TheShelfForm = (props:TheShelfProps) => {

    const dispatch = useDispatch(); // This is a Redux-specific hook that updates the store
    const store = useStore();
    const author = useSelector<TheShelfState>(state => state.author);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        // The ! is for strictly typed Typescript stuff
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated: ${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            // Dispatch basically updates our state / Redux store
            dispatch(chooseAuthor(data.author));
            dispatch(chooseTitle(data.title));
            dispatch(chooseLanguage(data.language));
            dispatch(choosePublisher(data.publisher));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="author">Author</label>
                    <Input {...register('author')} name="author" placeholder='Author'/>
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <Input {...register('title')} name="title" placeholder='Title'/>
                </div>
                <div>
                    <label htmlFor="language">Language</label>
                    <Input {...register('language')} name="language" placeholder='Language'/>
                </div>
                <div>
                    <label htmlFor="publisher">Publisher</label>
                    <Input {...register('publisher')} name="publisher" placeholder='Publisher'/>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}