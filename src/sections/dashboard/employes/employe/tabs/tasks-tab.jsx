import React, { useState, useCallback } from 'react';

import { Card, Stack, Button, Select, MenuItem, CardHeader } from '@mui/material';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';

import { TaskItem } from '../task-item';
import AddTaskDialog from '../add-task-dialog';

export function TasksTab() {
  const add = useBoolean();
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Task 1', isDone: true, assignedTo: 'Wissem Chihaoui' },
    { id: 2, title: 'Task 2', isDone: false, assignedTo: 'Wissem Chihaoui' },
    { id: 3, title: 'Task 3', isDone: true, assignedTo: 'Wissem Chihaoui' },
  ]);

  const [taskFilter, setTaskFilter] = useState('all');

  const toggleTask = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, isDone: !task.isDone } : task)));
  };

  // Filtered tasks based on selection
  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === 'done') return task.isDone;
    if (taskFilter === 'not_done') return !task.isDone;
    return true; // 'all'
  });

  const handleAddDocument = useCallback((document) => {
      console.info('document', document);
    }, []);

  return (
    <>
      <Card>
        <CardHeader
          title="Tâches"
          action={
            <Stack direction="row" spacing={2}>
              <Select
                value={taskFilter}
                onChange={(e) => setTaskFilter(e.target.value)}
                size="small"
              >
                <MenuItem value="all">Toutes les tâches</MenuItem>
                <MenuItem value="not_done">Tâches non achevées</MenuItem>
                <MenuItem value="done">Tâches achevées</MenuItem>
              </Select>

              <Button
                color="primary"
                variant="outlined"
                startIcon={<Iconify icon="mingcute:add-line" />}
                onClick={add.onTrue}
              >
                Créer
              </Button>
            </Stack>
          }
        />

        <Stack spacing={2.5} sx={{ p: 3 }}>
          {filteredTasks.map((task) => (
            <TaskItem
              variant="outlined"
              key={task.id}
              task={task}
              sx={{ p: 2.5, borderRadius: 1 }}
              toggle={() => toggleTask(task.id)}
            />
          ))}
        </Stack>
      </Card>
      <AddTaskDialog open={add.value} onClose={add.onFalse} onCreate={handleAddDocument}/>
    </>
  );
}
