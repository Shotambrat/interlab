import Rec from '../../_components/instructions/Rec'
import Banner from '../../_components/instructions/slug/Banner';
import InstructionBody from '../../_components/instructions/slug/InstructionBody';
import OtherInstructions from '../../_components/instructions/slug/OtherInstructions';

export default function page() {
  return (
    <div className='w-full flex flex-col gap-48 bg-white pb-48'>
        <Banner />
        <Rec />
        <InstructionBody />
        <OtherInstructions />
    </div>
  )
}
