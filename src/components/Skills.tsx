import { SkillsData } from "../data/data"

const Skills = () => {

    const { list } = SkillsData[0]

    return (
        <div id="skills" className="bg-gradient-to-b from-slate-700 to-gray-900 w-full md:w-auto p-5 md:p-32 rounded-lg text-center mt-20">
            <h1 className="text-center  mt-[5rem] lg:mt-0 text-4xl md:text-6xl font-mono font-light text-gray-900">
               <span className='text-red-500'>H</span><span className='text-white'>ABILIDADES</span>
            </h1>

            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-20 mt-20">
                {list.map(skill => (
                    <div className="flex flex-col items-center gap-1">
                        <div>
                            <img className="flex justify-center w-32 h-32 md:w-40 md:h-40 rounded-xl" src={skill.icon} />
                        </div>

                        <div>
                            <p className="text-xl text-white">{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Skills