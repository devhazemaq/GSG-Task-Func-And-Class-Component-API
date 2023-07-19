
export const POSTS_COLUMNS = (handleDelete, handleEdit) => [
  {
    key: 'id',
    title: 'Id',
  },
  {
    key: 'name',
    title: 'Name',
  },
  {
    key: 'cities',
    title: 'Cities',
  },
  
  {
    key: 'actions',
    title: 'Actions',
    render: (data) => (
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={() => handleDelete(data.id)}>delete</button>
        <button onClick={() => handleEdit(data.id)}>edit</button>
      </div>
    ),
  },

];


export const INPUTS_ARRAY = [
  {
    id: 'name',
    name: 'name',
    type: 'text',
    label: 'Name',
  },
  {
    id: 'cities',
    name: 'cities',
    type: 'text',
    label: 'Cities',
  },
]