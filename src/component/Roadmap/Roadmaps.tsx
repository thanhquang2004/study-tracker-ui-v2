import { useGetRoadmaps } from "../../hooks/useGetRoadmaps";
import UserRoadmaps from "./UserRoadmaps";
import { useEffect } from "react";
import LoadingScreen from "../Loader/Loader";
import { useDeleteRoadmapById } from "../../hooks/useDeleteRoadmap";
import { useNavigate } from "react-router-dom";

export default function Roadmaps() {
  const { GetRoadmaps, data, isLoading } = useGetRoadmaps();
  const { DeleteRoadmapById } = useDeleteRoadmapById();
  const navigate = useNavigate();

  // Fetch roadmaps here

  const handleDeleteRoadmap = async (id: string) => {
    // Implement delete logic here
    // After successful deletion, update the roadmaps state
    DeleteRoadmapById(id);
    navigate("/roadmaps");
  };    

    useEffect(() => {
        GetRoadmaps();
    }, []);

  

  if (isLoading) return <LoadingScreen />;

  return (
    <UserRoadmaps roadmaps={data!} onDeleteRoadmap={handleDeleteRoadmap} />
  );
}
