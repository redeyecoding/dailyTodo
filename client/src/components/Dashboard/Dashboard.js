import React from 'react';
import Header from '../../components/Header/Header';
import Card from '../../components/UI/Card/Card';

const DashBoard = props => {
    return (
        <>
            <Header/>
            <div className='dashboard_sidepanel__container'>
                <h1>MY TODOS</h1>       
            </div>

            <main className='dashboard_main__container'>
                <h1>DASHBOARD</h1>
                
                <Card className='dashboard_work_dashboard'>
                    <h1 className='dashboard_work_title'>DASHBOARD</h1>
                </Card>

                <Card className='dashboard_personal_dashboard'>
                    <h1 className='dashboard_personal_title'>DASHBOARD</h1>
                </Card>
            </main>
        </>
    )
};

export default DashBoard;