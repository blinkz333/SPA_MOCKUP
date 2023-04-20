import styles from "./tablet_component.module.css";
import path45 from './img/group-7.svg'
import group5 from './img/group-5.svg'
import group4 from './img/group-4.svg'


const ComponentTablet = () => {
  return (
    <div className={styles.div}>

      <div className={styles.athlets}>
        <div className={styles.athletsChild} />
        <div className={styles.rectangle7Copy1} />
        <div className={styles.athlets1}>ATHLETS</div>
        <div className={styles.connection1}>CONNECTION</div>
        <div className={styles.connectWithCoaches}>
          Connect with coaches directly, you can ping coaches to view profile.
        </div>
        <div className={styles.workWithOther}>
          Work with other student athletes to  increase visability. When you
          share and like other players videos it will increase your visability
          as a player. This is the team work aspect to Surface 1.
        </div>
        <div className={styles.resourcesAndTools}>
          Resources and tools for you to get better as a student Athelte. Access
          to training classes, tutor sessions, etc 
        </div>
        <div className={styles.athletsItem} />
        <div className={styles.collaboration1}>COLLABORATION</div>
        <div className={styles.growth1}>GROWTH</div>
        <div className={styles.div4}>
          <span className={styles.span}>0</span>1
        </div>
        <div className={styles.athletsInner} />
        <div className={styles.div5}>02</div>
        <div className={styles.athletsChild1} />
        <div className={styles.div6}>03</div>
        <img className={styles.athletsChild2} alt="" src={group4} />
      </div>

      <div className={styles.players}>
        <div className={styles.playersChild} />
        <div className={styles.rectangle7Copy} />
        <div className={styles.players1}>PLAYERS</div>
        <div className={styles.connection}>CONNECTION</div>
        <div className={styles.connectWithTalente}>
          Connect with talented athlete directly, you can watch their skills
          through video showreels directly from Surface 1.
        </div>
        <div className={styles.workWithRecruiterContainer}>
          <span className={styles.workWithRecruiter}>
            Work with recruiter to increase your chances of findingtalented
            athlete
          </span>
          .
        </div>
        <div className={styles.saveYourTimeContainer}>
          <span className={styles.workWithRecruiter}>
            Save your time, recruit proper athlets for your team
          </span>
          .
        </div>
        <div className={styles.playersItem} />
        <div className={styles.collaboration}>COLLABORATION</div>
        <div className={styles.growth}>GROWTH</div>
        <div className={styles.div1}>
          <span className={styles.span}>0</span>1
        </div>
        <div className={styles.playersInner} />
        <div className={styles.div2}>02</div>
        <div className={styles.rectangleDiv} />
        <div className={styles.div3}>03</div>
        <img className={styles.path45Copy} alt="" src={path45} />
        <img className={styles.groupIcon} alt="" src={group5} />
      </div>
      
      
    
    </div>
  );
};

export default ComponentTablet;
