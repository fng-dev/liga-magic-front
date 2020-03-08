import React, { Component } from 'react';
import './LeftNavBar.css';

class LeftNavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <nav className='navbar'>
                <link
                    href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap"
                    rel="stylesheet"
                />
                <ul className='navbar-nav'>
                <li className="logo">
                    <a href="/" className="nav-link">
                    <span className="link-text logo-text">Liga MTG</span>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fad"
                        data-icon="angle-double-right"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="svg-inline--fa fa-angle-double-right fa-w-14 fa-5x"
                    >
                        <g className="fa-group">
                        <path
                            fill="currentColor"
                            d="M224 273L88.37 409a23.78 23.78 0 0 1-33.8 0L32 386.36a23.94 23.94 0 0 1 0-33.89l96.13-96.37L32 159.73a23.94 23.94 0 0 1 0-33.89l22.44-22.79a23.78 23.78 0 0 1 33.8 0L223.88 239a23.94 23.94 0 0 1 .1 34z"
                            className="fa-secondary"
                        ></path>
                        <path
                            fill="currentColor"
                            d="M415.89 273L280.34 409a23.77 23.77 0 0 1-33.79 0L224 386.26a23.94 23.94 0 0 1 0-33.89L320.11 256l-96-96.47a23.94 23.94 0 0 1 0-33.89l22.52-22.59a23.77 23.77 0 0 1 33.79 0L416 239a24 24 0 0 1-.11 34z"
                            className="fa-primary"
                        ></path>
                        </g>
                    </svg>
                    </a>
                </li>
                    <li className='nav-item'>
                        <a href='/liga' className='nav-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="dragon" className="svg-inline--fa fa-dragon fa-w-20" role="img" viewBox="0 0 640 512"><path fill="currentColor" d="M18.32 255.78L192 223.96l-91.28 68.69c-10.08 10.08-2.94 27.31 11.31 27.31h222.7c-9.44-26.4-14.73-54.47-14.73-83.38v-42.27l-119.73-87.6c-23.82-15.88-55.29-14.01-77.06 4.59L5.81 227.64c-12.38 10.33-3.45 30.42 12.51 28.14zm556.87 34.1l-100.66-50.31A47.992 47.992 0 0 1 448 196.65v-36.69h64l28.09 22.63c6 6 14.14 9.37 22.63 9.37h30.97a32 32 0 0 0 28.62-17.69l14.31-28.62a32.005 32.005 0 0 0-3.02-33.51l-74.53-99.38C553.02 4.7 543.54 0 533.47 0H296.02c-7.13 0-10.7 8.57-5.66 13.61L352 63.96 292.42 88.8c-5.9 2.95-5.9 11.36 0 14.31L352 127.96v108.62c0 72.08 36.03 139.39 96 179.38-195.59 6.81-344.56 41.01-434.1 60.91C5.78 478.67 0 485.88 0 494.2 0 504 7.95 512 17.76 512h499.08c63.29.01 119.61-47.56 122.99-110.76 2.52-47.28-22.73-90.4-64.64-111.36zM489.18 66.25l45.65 11.41c-2.75 10.91-12.47 18.89-24.13 18.26-12.96-.71-25.85-12.53-21.52-29.67z"/></svg>
                        <span className='link-text'>Liga</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='/etapa' className='nav-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="calendar-alt" className="svg-inline--fa fa-calendar-alt fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z"/></svg>
                        <span className='link-text'>Etapa</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='/player' className='nav-link'>
                        <svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="id-card" className="svg-inline--fa fa-id-card fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 400H303.2c.9-4.5.8 3.6.8-22.4 0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6 0 26-.2 17.9.8 22.4H48V144h480v288zm-168-80h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm0-64h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8H360c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm-168 96c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z"></path></svg>
                            <span className='link-text'>Players</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='/pontos' className='nav-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="stream" className="svg-inline--fa fa-stream fa-w-16" role="img" viewBox="0 0 512 512"><path fill="currentColor" d="M16 128h416c8.84 0 16-7.16 16-16V48c0-8.84-7.16-16-16-16H16C7.16 32 0 39.16 0 48v64c0 8.84 7.16 16 16 16zm480 80H80c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16zm-64 176H16c-8.84 0-16 7.16-16 16v64c0 8.84 7.16 16 16 16h416c8.84 0 16-7.16 16-16v-64c0-8.84-7.16-16-16-16z"/></svg>
                            <span className='link-text'>Pontuacao</span>
                        </a>
                    </li>

                    <li className='nav-item'>
                        <a href='/' className='nav-link'>
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dev" className="svg-inline--fa fa-dev fa-w-14" role="img" viewBox="0 0 448 512"><path fill="currentColor" d="M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z"/></svg>
                            <span className='link-text'>fng-dev</span>
                        </a>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default LeftNavBar;
