import Head from 'next/head';
import Image from 'next/image';
import pic from '../public/me.jpg';
import styles from '../styles/Home.module.css';

export default function Home() {
    function approxExp() {
        let startDate = new Date('January 4, 2021');
        let today = new Date();

        let diff = (today.getTime() - startDate.getTime()) / 1000;
        diff /= 60 * 60 * 24 * 7 * 4;
        diff = Math.abs(Math.round(diff));

        return diff;
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Aman Pahurkar | Software Engineer</title>
                <link rel="canonical" href="https://amanpahurkar.vercel.app" />
                <meta name="description" content="I am Aman Pahurkar and welcome to my personal website! I am currently working at CarWale as an Associate Software Development Engineer. Feel free to reach out to me." />
                <meta name="keywords" content="personal website, software engineer, computer engineering" />
            </Head>
            <div id={styles.me}>
                <Image 
                    src={pic}
                    width={1000}
                    height={1000}
                    alt="Image of Aman Pahurkar"
                    priority={true}
                />
            </div>

            <header className={styles.nameContainer}>
                <svg
                    id={styles.name}
                    viewBox="0 0 439 51"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                >
                <path
                    d="M29.875 29.8125C25.4792 17.0417 23.0521 9.86458 22.5938 8.28125C22.5938 8.28125 20.0625 15.4583 15 29.8125H29.875ZM37.0312 49L31.625 34.3438H13.1875L7.59375 49H2.09375L19.8438 2.6875H25.375L42.5938 49H37.0312Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M90.6875 49V31.1562C90.6875 29.4896 90.6458 28.0938 90.5625 26.9688C90.5 25.8438 90.3333 24.6979 90.0625 23.5312C89.8125 22.3646 89.4479 21.4479 88.9688 20.7812C88.5104 20.0938 87.8646 19.5417 87.0312 19.125C86.1979 18.6875 85.1979 18.4688 84.0312 18.4688C81.7396 18.4688 79.7812 19.0833 78.1562 20.3125C76.5521 21.5417 75.4062 23.2708 74.7188 25.5C74.5312 27 74.4375 28.6042 74.4375 30.3125V49H69.2188V30.5938C69.2188 29.0521 69.1667 27.7188 69.0625 26.5938C68.9583 25.4479 68.7604 24.3438 68.4688 23.2812C68.1771 22.1979 67.7812 21.3229 67.2812 20.6562C66.8021 19.9896 66.1562 19.4583 65.3438 19.0625C64.5312 18.6667 63.5625 18.4688 62.4375 18.4688C59.9375 18.4688 57.8333 19.1042 56.125 20.375C54.4375 21.6458 53.3021 23.3333 52.7188 25.4375C52.5312 27.0417 52.4375 28.7812 52.4375 30.6562V49H47.2188C47.1771 27.5625 47.1562 16.1354 47.1562 14.7188H51.5312L52.1875 19.625C53.2292 18.0417 54.7083 16.7083 56.625 15.625C58.5417 14.5417 60.7188 14 63.1562 14C64.4271 14 65.5938 14.1354 66.6562 14.4062C67.7396 14.6562 68.6354 14.9792 69.3438 15.375C70.0729 15.7708 70.7188 16.25 71.2812 16.8125C71.8438 17.3542 72.2812 17.8958 72.5938 18.4375C72.9062 18.9583 73.1667 19.5104 73.375 20.0938C75.875 16.0312 79.6979 14 84.8438 14C88.6562 14 91.4479 15.0938 93.2188 17.2812C95.0104 19.4479 95.9062 22.6667 95.9062 26.9375V49H90.6875Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M112.5 45.5C114.979 45.5 117.156 44.8229 119.031 43.4688C120.927 42.0938 122.146 40.25 122.688 37.9375V32.1562C122.583 32.1562 121.948 32.2083 120.781 32.3125C119.635 32.4167 118.885 32.4792 118.531 32.5C114.01 32.8958 110.854 33.6354 109.062 34.7188C107.292 35.8021 106.406 37.5417 106.406 39.9375C106.406 41.7708 106.948 43.1562 108.031 44.0938C109.115 45.0312 110.604 45.5 112.5 45.5ZM123.844 49C123.531 47.6667 123.229 46.2292 122.938 44.6875C121.042 46.5833 119.26 47.8958 117.594 48.625C115.927 49.3542 113.969 49.7188 111.719 49.7188C108.51 49.7188 105.927 48.8854 103.969 47.2188C102.031 45.5312 101.062 43.1146 101.062 39.9688C101.062 36.4688 102.385 33.875 105.031 32.1875C107.698 30.5 111.531 29.4479 116.531 29.0312C117.219 28.9688 118.25 28.8854 119.625 28.7812C121.021 28.6562 122.062 28.5625 122.75 28.5V25.4688C122.75 23.0521 122.188 21.2604 121.062 20.0938C119.938 18.9271 118.167 18.3438 115.75 18.3438C112.375 18.3438 108.969 19.1771 105.531 20.8438C105.427 20.5938 105.156 19.875 104.719 18.6875C104.281 17.4792 104.052 16.8542 104.031 16.8125C105.552 15.9583 107.354 15.2812 109.438 14.7812C111.542 14.2604 113.677 14 115.844 14C120.115 14 123.188 14.9375 125.062 16.8125C126.958 18.6667 127.906 21.8333 127.906 26.3125V49H123.844Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M136.906 49V14.7188H141.281L141.938 19.625C143.292 17.9375 144.979 16.5833 147 15.5625C149.042 14.5208 151.24 14 153.594 14C157.552 14 160.479 15.1146 162.375 17.3438C164.271 19.5521 165.219 22.9583 165.219 27.5625V49H160C160 35.25 159.99 27.8854 159.969 26.9062C159.885 23.9896 159.292 21.8542 158.188 20.5C157.104 19.1458 155.281 18.4688 152.719 18.4688C150.031 18.4688 147.792 19.1146 146 20.4062C144.208 21.6979 143.042 23.375 142.5 25.4375C142.292 26.8333 142.188 28.4375 142.188 30.25V49H136.906Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M195.531 49H190V2.25H205.062C207.354 2.25 209.427 2.48958 211.281 2.96875C213.135 3.44792 214.781 4.17708 216.219 5.15625C217.656 6.13542 218.771 7.44792 219.562 9.09375C220.354 10.7396 220.75 12.6562 220.75 14.8438C220.75 16.6562 220.583 18.2812 220.25 19.7188C219.917 21.1354 219.344 22.4688 218.531 23.7188C217.719 24.9688 216.656 26.0104 215.344 26.8438C214.031 27.6562 212.344 28.3021 210.281 28.7812C208.24 29.2396 205.865 29.4688 203.156 29.4688C201.01 29.4688 198.469 29.3333 195.531 29.0625V49ZM203.688 24.6875C205.729 24.6875 207.479 24.4896 208.938 24.0938C210.396 23.6979 211.51 23.2083 212.281 22.625C213.073 22.0417 213.688 21.2812 214.125 20.3438C214.583 19.4062 214.865 18.5521 214.969 17.7812C215.073 16.9896 215.125 16.0417 215.125 14.9375C215.125 12.2917 214.229 10.3438 212.438 9.09375C210.667 7.84375 208.25 7.21875 205.188 7.21875H195.531V24.625C199.552 24.6667 202.271 24.6875 203.688 24.6875Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M235.812 45.5C238.292 45.5 240.469 44.8229 242.344 43.4688C244.24 42.0938 245.458 40.25 246 37.9375V32.1562C245.896 32.1562 245.26 32.2083 244.094 32.3125C242.948 32.4167 242.198 32.4792 241.844 32.5C237.323 32.8958 234.167 33.6354 232.375 34.7188C230.604 35.8021 229.719 37.5417 229.719 39.9375C229.719 41.7708 230.26 43.1562 231.344 44.0938C232.427 45.0312 233.917 45.5 235.812 45.5ZM247.156 49C246.844 47.6667 246.542 46.2292 246.25 44.6875C244.354 46.5833 242.573 47.8958 240.906 48.625C239.24 49.3542 237.281 49.7188 235.031 49.7188C231.823 49.7188 229.24 48.8854 227.281 47.2188C225.344 45.5312 224.375 43.1146 224.375 39.9688C224.375 36.4688 225.698 33.875 228.344 32.1875C231.01 30.5 234.844 29.4479 239.844 29.0312C240.531 28.9688 241.562 28.8854 242.938 28.7812C244.333 28.6562 245.375 28.5625 246.062 28.5V25.4688C246.062 23.0521 245.5 21.2604 244.375 20.0938C243.25 18.9271 241.479 18.3438 239.062 18.3438C235.688 18.3438 232.281 19.1771 228.844 20.8438C228.74 20.5938 228.469 19.875 228.031 18.6875C227.594 17.4792 227.365 16.8542 227.344 16.8125C228.865 15.9583 230.667 15.2812 232.75 14.7812C234.854 14.2604 236.99 14 239.156 14C243.427 14 246.5 14.9375 248.375 16.8125C250.271 18.6667 251.219 21.8333 251.219 26.3125V49H247.156Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M283.312 49V28.2812C283.312 24.8438 282.76 22.3438 281.656 20.7812C280.573 19.2188 278.667 18.4375 275.938 18.4375C273.312 18.4375 271.094 19.0938 269.281 20.4062C267.49 21.7188 266.323 23.4167 265.781 25.5C265.594 27.0625 265.5 28.8021 265.5 30.7188V49H260.281V1.40625L265.5 1.09375V15.0312C265.5 16.2188 265.458 17.6875 265.375 19.4375C268.312 15.8125 272.208 14 277.062 14C284.708 14 288.531 18.4896 288.531 27.4688V49H283.312Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                    <path
                    d="M293.781 37.5625V14.7188H299.031V37.625C299.031 39.125 299.24 40.3958 299.656 41.4375C300.094 42.4792 300.708 43.2917 301.5 43.875C302.312 44.4375 303.219 44.8438 304.219 45.0938C305.24 45.3438 306.406 45.4688 307.719 45.4688C310.427 45.4688 312.531 44.875 314.031 43.6875C315.552 42.5 316.312 40.4792 316.312 37.625V14.7188H321.562V37.5625C321.562 39.3125 321.312 40.8854 320.812 42.2812C320.312 43.6771 319.635 44.8438 318.781 45.7812C317.948 46.6979 316.938 47.4583 315.75 48.0625C314.562 48.6667 313.302 49.1042 311.969 49.375C310.656 49.6458 309.24 49.7812 307.719 49.7812C306.219 49.7812 304.802 49.6458 303.469 49.375C302.135 49.1042 300.865 48.6667 299.656 48.0625C298.469 47.4375 297.438 46.6667 296.562 45.75C295.708 44.8125 295.031 43.6458 294.531 42.25C294.031 40.8542 293.781 39.2917 293.781 37.5625Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M344.719 14.4062C345.656 14.4062 346.51 14.4688 347.281 14.5938L347.094 19.4062C346.135 19.2396 345.302 19.1562 344.594 19.1562C341.677 19.1562 339.302 20.1771 337.469 22.2188C335.656 24.2396 334.75 26.75 334.75 29.75V49H329.531C329.51 27.9583 329.5 16.5312 329.5 14.7188H333.844L334.344 20.875C335.531 18.9375 337.042 17.375 338.875 16.1875C340.708 15 342.656 14.4062 344.719 14.4062Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M352.719 49V1.40625L357.906 1.09375V26V30.375C358.031 30.25 358.219 30.0417 358.469 29.75C358.719 29.4583 358.917 29.2396 359.062 29.0938C360.875 27.1146 365.562 22.3229 373.125 14.7188H379.75L365.5 29.1562L380.75 49H374.25L361.719 32.125L357.906 35.4062V49H352.719Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M395.125 45.5C397.604 45.5 399.781 44.8229 401.656 43.4688C403.552 42.0938 404.771 40.25 405.312 37.9375V32.1562C405.208 32.1562 404.573 32.2083 403.406 32.3125C402.26 32.4167 401.51 32.4792 401.156 32.5C396.635 32.8958 393.479 33.6354 391.688 34.7188C389.917 35.8021 389.031 37.5417 389.031 39.9375C389.031 41.7708 389.573 43.1562 390.656 44.0938C391.74 45.0312 393.229 45.5 395.125 45.5ZM406.469 49C406.156 47.6667 405.854 46.2292 405.562 44.6875C403.667 46.5833 401.885 47.8958 400.219 48.625C398.552 49.3542 396.594 49.7188 394.344 49.7188C391.135 49.7188 388.552 48.8854 386.594 47.2188C384.656 45.5312 383.688 43.1146 383.688 39.9688C383.688 36.4688 385.01 33.875 387.656 32.1875C390.323 30.5 394.156 29.4479 399.156 29.0312C399.844 28.9688 400.875 28.8854 402.25 28.7812C403.646 28.6562 404.688 28.5625 405.375 28.5V25.4688C405.375 23.0521 404.812 21.2604 403.688 20.0938C402.562 18.9271 400.792 18.3438 398.375 18.3438C395 18.3438 391.594 19.1771 388.156 20.8438C388.052 20.5938 387.781 19.875 387.344 18.6875C386.906 17.4792 386.677 16.8542 386.656 16.8125C388.177 15.9583 389.979 15.2812 392.062 14.7812C394.167 14.2604 396.302 14 398.469 14C402.74 14 405.812 14.9375 407.688 16.8125C409.583 18.6667 410.531 21.8333 410.531 26.3125V49H406.469Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                <path
                    d="M434.906 14.4062C435.844 14.4062 436.698 14.4688 437.469 14.5938L437.281 19.4062C436.323 19.2396 435.49 19.1562 434.781 19.1562C431.865 19.1562 429.49 20.1771 427.656 22.2188C425.844 24.2396 424.938 26.75 424.938 29.75V49H419.719C419.698 27.9583 419.688 16.5312 419.688 14.7188H424.031L424.531 20.875C425.719 18.9375 427.229 17.375 429.062 16.1875C430.896 15 432.844 14.4062 434.906 14.4062Z"
                    stroke="white"
                    strokeWidth="1"
                    mask="url(#path-1-outside-1)"
                />
                </svg>
            </header>

            <p id={styles.about}>Hello! I am a Software Engineer with about <time>{approxExp()} months</time> of experience. Currently I am working at <a href="https://carwale.com" target="_blank" rel="noopener noreferrer">CarWale</a> as an Associate Software Development Engineer. Prior to this, I was an intern at CarWale. Reach out to me via LinkedIn or mail.</p>
            
            <div id={styles.links}>
                <a href="https://github.com/echoaman" target="_blank" rel="noopener noreferrer">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path fill="#FFF" d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                </a>
                <a href="https://linkedin.com/in/amanpahurkar" target="_blank" rel="noopener noreferrer">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path fill="#0A66C2" d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="mailto:amanpahurkar13@gmail.com">
                    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Mail</title><path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/></svg>
                </a>
                <a href="/AmanPahurkar.pdf" target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-4 -2 24 24" preserveAspectRatio="xMinYMin"><title>Resume</title><path fill="#FFF" d="M3 0h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3zm8 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 9a1 1 0 1 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H3zm0 3a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H3zm8-10a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2h-2zM3 2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H3z"></path></svg>
                </a>
            </div>
        </div>
    );
}
