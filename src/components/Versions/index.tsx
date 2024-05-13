import './index.css';
import { VERSION_DETAILS } from '../../data/data';

export default function VersionsComponent() {

    return (
        <div className='versionDataContainer'>
            {
                VERSION_DETAILS.map(data => {
                    return (
                        <div className='versionRow'>
                            <div className='versionOverview'>
                                <h3>v{data.version}</h3>
                                <small>{data.date}</small>
                            </div>
                            {/* **** */}
                            <div className='versionColum'>
                                {
                                    data.added.length > 0 &&
                                    <div>
                                        <h2>Added</h2>
                                        <ul>
                                            {
                                                data.added.map(entry => {
                                                    return (
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="addedIcon" viewBox="0 0 16 16">
                                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                                                                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                                                            </svg>
                                                            {entry}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                                {/* ************************ */}
                                {
                                    data.fixed.length > 0 &&
                                    <div>
                                        <h2>Fixed</h2>
                                        <ul>
                                            {
                                                data.fixed.map(entry => {
                                                    return (
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="fixedIcon" viewBox="0 0 16 16"> <path d="M6.95.435c.58-.58 1.52-.58 2.1 0l6.515 6.516c.58.58.58 1.519 0 2.098L9.05 15.565c-.58.58-1.519.58-2.098 0L.435 9.05a1.48 1.48 0 0 1 0-2.098zm1.4.7a.495.495 0 0 0-.7 0L1.134 7.65a.495.495 0 0 0 0 .7l6.516 6.516a.495.495 0 0 0 .7 0l6.516-6.516a.495.495 0 0 0 0-.7L8.35 1.134z" /> <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z" /> </svg>
                                                            {entry}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                                {/* *********************** */}
                                {
                                    data.changed.length > 0 &&
                                    <div>
                                        <h2>Changed</h2>
                                        <ul>
                                            {
                                                data.changed.map(entry => {
                                                    return (
                                                        <li>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="changedIcon" viewBox="0 0 16 16">
                                                                <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5z" />
                                                                <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0" />
                                                            </svg>
                                                            {entry}
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
