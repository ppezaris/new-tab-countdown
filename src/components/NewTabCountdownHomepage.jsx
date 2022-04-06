import React from "react";
import PropTypes from "prop-types";
import CountdownList from "./CountdownList";
import "../styles/site.scss";

const NewTabCountdownHomepage = ({
  countdownList,
  intervalDuration,
  maxNumCountdown,
  isChrome,
}) => {
  return (
    <div className="content">
      <div className="countdown-list">
        <CountdownList
          countdownList={countdownList}
          intervalDuration={intervalDuration}
          maxNumCountdown={maxNumCountdown}
          isChrome={isChrome}
        />
      </div>
    </div>
  );
};

NewTabCountdownHomepage.propTypes = {
  countdownList: PropTypes.object,
  intervalDuration: PropTypes.number.isRequired,
  maxNumCountdown: PropTypes.number.isRequired,
  isChrome: PropTypes.bool.isRequired,
};

export default NewTabCountdownHomepage;
