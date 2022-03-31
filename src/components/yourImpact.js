import { Tree32, Earth32, Money32 } from '@carbon/icons-react';

const noOfTreesSaved = "20 trees ", tonsOfCarbonRemoved = "100 tons", percentageOfReducedSpending = "20%";
function YourImpact() {
    return (
        <div className='yourImpactContainer'>
             <h2 className='BlodText'>{"Your impact"}</h2>
            <label className='iconlabel'>
                <Tree32 aria-label="Add" className="icon icon-custom-tree" />
                <div>{"You have saved "}
                    <span className='BlodText'>{noOfTreesSaved}</span>
                    {"to date."}</div>
            </label>
            <label className='iconlabel'>
                <Earth32 aria-label="Add" className="icon icon-custom-earth" />
                <div>{"You have removed "}
                    <span className='BlodText'>{tonsOfCarbonRemoved}</span>
                    {"of carbon."}</div>
            </label>
            <label className='iconlabel'>
                <Money32 aria-label="Add" className="icon" />
                <div>{"You have reduced your spending by "}
                    <span className='BlodText'>{percentageOfReducedSpending}</span>
                </div>
            </label>
        </div>
    );
}

export default YourImpact