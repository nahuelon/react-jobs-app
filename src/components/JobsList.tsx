import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useSelector, useDispatch } from 'react-redux'
import { getJobs } from '../store/jobs/jobsActions'
import { ApplicationState } from '../store'
import Button from 'react-bootstrap/Button'

const JobsList : React.FC = () => {
  const [user, jobsState] = useSelector((state: ApplicationState) => [state.auth.user, state.jobs])
  const dispatch = useDispatch()

  const handleRefresh = (event: React.MouseEvent) => dispatch(getJobs())

  return (
    <div className="container">
      <Button 
        variant="primary"
        disabled={jobsState.isLoading}
        onClick={handleRefresh}>
          { (!jobsState.isLoading) ? 
            (user && user.displayName) ? `Refresh ${user.displayName}'s Jobs List` : `Refresh User's Jobs List` 
          : 'Loading...'
          }

      </Button>
      <ListGroup>
        { jobsState.jobs.map( (job, index) => (
          <ListGroup.Item key={index}>
            {job.company}
          </ListGroup.Item>
        )) }
      </ListGroup>
    </div>
  )
}

export default JobsList;