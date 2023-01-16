import  utils from '../../../../website/server/libs/tasks/utils'

descbribe('utils tasks testing', ()=> {
    let task, user, dueDateOption;
    it ('setTaskType is not daily',()=> {
        task.type !== daily
    })
    it ('dueDateOption exists',()=>{
        dueDateOption !== null
    })
    it ('time is correct',()=>{
        dateTaskIsDue.hour() === 0
        && dateTaskIsDue.minute() === 0
        && dateTaskIsDue.second() === 0
        && dateTaskIsDue.millisecond() === 0
    })
    it ('nextDue exists',()=>{
        nextDue !== null && nextDue.length > 0
    })
})
