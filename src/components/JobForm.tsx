import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Button from 'react-bootstrap/Button'
import { addJob } from '../store/jobs/jobsActions'
import { ApplicationState } from '../store'

const JobForm : React.FC = ()  => {
  const [job, setJob] = useState({ id: '', position: '', company: '', salary: 0, uid: '', withFeedback: false})

  const isLoading = useSelector((state: ApplicationState) => state.auth.isLoading)

  const dispatch = useDispatch()

  const handleOnChange = ( (event: React.ChangeEvent<HTMLInputElement>) => {
    setJob({
        ...job,
        [event.target.id]: event.target.value
    });
  })

  const handleSubmit = (event: React.MouseEvent<HTMLInputElement>) => {
    event.preventDefault()
    dispatch(addJob(job))
  }

  return (
    <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
        <div className="form-group text-left">
          <label htmlFor="position">Position</label>
          <input type="text" 
            className="form-control" 
            id="position" value={job.position}
            aria-describedby="emailHelp"
            placeholder="Position"
            onChange={handleOnChange}
          />
        </div>
        <div className="form-group text-left">
            <label htmlFor="company">Company</label>
            <input type="text" 
                className="form-control" 
                id="company" value={job.company}
                placeholder="Company"
                onChange={handleOnChange}
            />
        </div>
        <div className="form-group text-left">
            <label htmlFor="salary">Salary</label>
            <input type="text" 
                className="form-control" 
                id="salary" value={job.salary}
                placeholder="Salary"
                onChange={handleOnChange}
            />
        </div>
        <Button 
          type="submit"
          disabled={isLoading}
          variant="success"
          className="btn btn-primary"
          onClick={handleSubmit}
          >
          { (!isLoading) ? 'Add Job' : 'Saving...' }
        </Button>
      </form>
    </div>
  )
}

export default JobForm
