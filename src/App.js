/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from 'react';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [modalTitle, setModalTitle] = useState(null);
  let [입력값, 입력값변경] = useState('');

  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그임</h4>
      </div>

      {/* <button
                onClick={() => {
                    let copy1 = [...title];

                    copy1.sort((a, b) => {
                        return a.localeCompare(b);
                    });

                    b(copy1);
                }}
            >
                정렬
            </button> */}

      {/* <div className="list">
        <h4
          onClick={() => {
            let copy = [...title];
            copy[0] = "여자코트 추천";
            b(copy);
          }}
        >
          {title[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            modal == true ? setModal(false) : setModal(true);
          }}
        >
          {title[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div> */}

      {title.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModalTitle(a);
                setModal(true);
              }}
            >
              {a}{' '}
              <span
                onClick={(e) => {
                  e.stopPropagation();

                  let 따봉복사 = [...따봉];

                  따봉복사[i] = 따봉복사[i] + 1;

                  따봉변경(따봉복사);
                }}
              >
                👍
              </span>{' '}
              {따봉[i]}
            </h4>
            <p>2월 17일 발행</p>
            <button
              onClick={() => {
                let copy = [...title];
                copy.splice(i, 1);
                setTitle(copy);
              }}
            >
              글 삭제
            </button>
          </div>
        );
      })}

      <input
        onChange={(e) => {
          입력값변경(e.target.value);
        }}
      ></input>
      <button
        onClick={() => {
          let copy = [...title];
          copy.unshift(입력값);
          setTitle(copy);
        }}
      >
        발행
      </button>

      {modal == true ? <Modal setTitle={setTitle} title={title} modalTitle={modalTitle} /> : null}
      <Modal2></Modal2>
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.modalTitle}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          let copy = [...props.title];
          copy[0] = '여자 코트 추천';
          props.setTitle(copy);
        }}
      >
        글수정
      </button>
    </div>
  );
}

class Modal2 extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'kim',
      age: 20,
    };
  }
  render() {
    return (
      <div>
        안녕 {this.state.age}
        <button
          onClick={() => {
            this.setState({ age: 21 });
          }}
        >
          버튼
        </button>
      </div>
    );
  }
}

export default App;
