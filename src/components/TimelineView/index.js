// Write your code here

import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="app-container">
      <h1 className="project-heading">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachItem => {
            if (eachItem.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={eachItem.id}
                  courseDetails={eachItem}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={eachItem.id}
                projectDetails={eachItem}
              />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
