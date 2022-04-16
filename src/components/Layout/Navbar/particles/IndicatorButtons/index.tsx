import IndicatorToggleButton from "./IndicatorToggleButton";
import mood from '@/assets/raw/mood-happy.svg';
import badge from '@/assets/raw/badge.svg';

export function IndicatorButtons(){
   return (
<div className="flex-row-align">
   <IndicatorToggleButton src={mood}/>
   <IndicatorToggleButton src={badge}/>
</div>
   )
}