import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { Launch32 } from '@carbon/icons-react';

ChartJS.register(ArcElement, Tooltip, Legend);

const totalAnnualUsagePercentage = "75%", annualEmissionGoal = "1000 KgCo2", lastUpdatedOn = "6-31-2022";
const data = {
    // labels: ['Green', 'Grey'],
    datasets: [
        {
            label: '# of Votes',
            data: [75, 25],
            backgroundColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(105, 105, 105, 1)'
            ],
            borderColor: [
                'rgba(0, 128, 0, 1)',
                'rgba(105, 105, 105, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

function YearlyEmissionsCardView() {
    return <div className='YearlyEmissionsContainer'>
        <h2 className='BlodText'>{"Yearly emissions to date"}</h2>
        <div className='chartContainer'>
           <div className='chart'><Doughnut data={data} /></div> 
            <div className='allignRight'>
                <p className='details'>{totalAnnualUsagePercentage}</p>
                <p>{"total annual usage"}</p>
            </div>
        </div>
        <div>
            <p><span className='BlodText'>{"Annual emission goal: "}</span> <span>{annualEmissionGoal}</span></p>
            <p className='graytext'><span>{"Last updated"}</span><span>{lastUpdatedOn}</span> </p>
        </div>
        <div className='footer_bg_gradient'>
            <p>
                {"Dive deeper and manage your emission data in "}
                <a href=''>{"Envizi"}</a>
               <span><Launch32 aria-label="Add" className="icon icon-custom-launch" /></span> 
            </p>
        </div>
    </div>;
}

export default YearlyEmissionsCardView