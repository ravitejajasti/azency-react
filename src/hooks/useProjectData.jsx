import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

const useProjectData = () => {
    const [tasks, setTasks] = useState([]);
    const [sections, setSections] = useState([]);
    const [users, setUsers] = useState([]);
    const { projectId } = useParams();
    const { authTokens } = useContext(AuthContext);

    useEffect(() => {
        const fetchProjectData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/projects/${projectId}/detail`, {
                    headers: {
                        Authorization: `Bearer ${authTokens?.access}`
                    }
                });
                console.log('API Response Data:', response.data);

                if (response.data) {
                    setSections(response.data.sections);
                    setUsers(response.data.members);

                    const allTasks = response.data.sections.flatMap(section => section.tasks);
                    setTasks(allTasks);
                } else {
                    console.error('Unexpected response structure:', response);
                }
            } catch (error) {
                console.error('Error fetching project data:', error);
            }
        };

        fetchProjectData();
    }, [projectId, authTokens]);

    return { tasks, sections, users, setTasks, setSections };
};

export default useProjectData;
