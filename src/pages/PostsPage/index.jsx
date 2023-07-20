import React, { useEffect, useState } from 'react'
import Table from '../../components/Table';
import { POSTS_COLUMNS } from '../../constants/posts';
import { Navigate } from 'react-router-dom';

import axios from 'axios';
import WithParams from '../../components/WithParams'

function Stores() {
  const [allStores, setAllStores] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rowId, setRowId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [isNavigate, setIsNavigate] = useState(false);
  const [isEditNavigate, setIsEditNavigate] = useState(false);
  const [isCreating, setIsCreating] = useState(false);

  const fetchAllStoresData = async () => {
      try {
          const response = await axios.get("https://some-data.onrender.com/stores");
          const data = response.data;
          setAllStores(data);
          setIsLoading(false);
      } catch (error) {
          throw new Error("Error while fetching all stores data.");
      }
  };

  useEffect(() => {
      fetchAllStoresData();
  }, []);

  const handleDelete = async (id) => {
      try {
          await axios.delete(`https://some-data.onrender.com/stores/${id}`);
          setAllStores((prevStores) => prevStores.filter((store) => store.id !== id));
      } catch (error) {
          throw new Error("Error while deleting the store according to the store id!");
      }
  };

  const handleEdit = (id) => {
      setEditId(id);
      setIsEditNavigate(true);
  };

  const handleView = (row) => {
      setRowId(row.id);
      setIsNavigate(true);
  };

  return (
      <>
          <Table columns={POSTS_COLUMNS(allStores, handleEdit, handleDelete)} data={allStores} onRowClick={handleView} />
          {isLoading && <h1>Loading...</h1>}
          {isNavigate && <Navigate to={`/stores/${rowId}`} replace={true} />}
          {isEditNavigate && <Navigate to={`/stores/${editId}/edit`} replace={true} />}
          <button  onClick={() => setIsCreating(true)}>Create Post</button>
          {isCreating && <Navigate to={"/create"} replace={true} />}
      </>
  );
}

export default WithParams(Stores);
