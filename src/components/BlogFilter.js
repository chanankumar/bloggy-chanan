import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByDate, sortByLikes} from '../actions/filters';
import {faHeart, faTable} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const BlogFilter = (props) => {
    return (
      <div className="input-group">
        <div className="input-group__item">
          <input
            type="text"
            placeholder="Search Blog"
            value={props.filters.text}
            onChange={(e) => {
              props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div className="input-group__item">
        <div class="inner">
        <div class="item">
          <input type="radio" id="male" name="gender" value="male" checked={props.filters.sortBy === 'likes'} 
          onClick ={() => {
            props.dispatch(sortByLikes());
          }}/>
          <label title="Sort by Likes" for="male"><FontAwesomeIcon icon={faHeart}/></label>
        </div>
        <div class="item">
          <input type="radio" id="female" name="gender" value="female" checked={props.filters.sortBy === 'date'}
          onClick ={() => {
            props.dispatch(sortByDate());
          }}/>
          <label title="Recent" for="female"><FontAwesomeIcon icon={faTable}/></label>
        </div>
      </div>
        </div>
      </div>
    );
  }

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(BlogFilter);