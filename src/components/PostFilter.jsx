import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />
            <MySelect
                defaultValue="sorting"
                value={filter.sort}
                options={[
                    {name: "by title", value: "title"},
                    {name: "by body", value: "body"}
                ]}
                onChange={(sortingType) => setFilter({...filter, sort: sortingType})}
            />
        </div>
    );
};

export default PostFilter;