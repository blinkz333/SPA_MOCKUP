import styles from "./desktop.module.css";
import football from './img/footballer-1@2x.png'
import group3 from './img/group-3.svg'

const Desktop = () => {

  return (
    <div className={styles.desktop}>
      <div className={styles.desktopChild} />
      <div className={styles.rectangle7Copy} />
      <div className={styles.athlets}>ATHLETS</div>
      <div className={styles.connection}>CONNECTION</div>
      <div className={styles.connectWithCoaches}>
        Connect with coaches directly, you can ping coaches to view profile.
      </div>
      <div className={styles.workWithOther}>
        Work with other student athletes to  increase visability. When you share
        and like other players videos it will increase your visability as a
        player. This is the team work aspect to Surface 1.
      </div>
      <div className={styles.resourcesAndTools}>
        Resources and tools for you to get better as a student Athelte. Access
        to training classes, tutor sessions, etc 
      </div>
      <div className={styles.desktopItem} />
      <div className={styles.collaboration}>COLLABORATION</div>
      <div className={styles.growth}>GROWTH</div>
      <div className={styles.div}>
        <span className={styles.span}>0</span>1
      </div>
      <div className={styles.desktopInner} />
      <div className={styles.div1}>02</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.div2}>03</div>
      <img
        className={styles.footballer1Icon}
        alt=""
        src={football}
      />
      <div className={styles.player}>
        <div className={styles.rectangle7Copy2} />
        <div className={styles.rectangle7Copy3} />
        <div className={styles.players}>PLAYERS</div>
        <div className={styles.connection1}>CONNECTION</div>
        <div className={styles.connectWithTalente}>
          Connect with talented athlete directly, you can watch their skills
          through video showreels directly from Surface 1.
        </div>
        <div className={styles.workWithRecruiterContainer}>
          <span className={styles.workWithRecruiter}>
            Work with recruiter to increase your chances of finding talented
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
        <div className={styles.rectangle4Copy} />
        <div className={styles.collaborationCopy}>COLLABORATION</div>
        <div className={styles.growth1}>GROWTH</div>
        <div className={styles.copy}>
          <span className={styles.span}>0</span>1
        </div>
        <div className={styles.rectangle4Copy2} />
        <div className={styles.copy1}>02</div>
        <div className={styles.rectangle4Copy3} />
        <div className={styles.copy2}>03</div>
        <img className={styles.playerChild} alt="" src={group3} />
        <div className={styles.playerItem} />
        <div className={styles.playerInner} />
      </div>
    </div>
  );
};

export default Desktop;
