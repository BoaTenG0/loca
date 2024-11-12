import HeadingMain from '@/components/templates/typography/headingMain'
import HeadingSub from '@/components/templates/typography/headingSub'
import { AccordionTemplateNew } from '@/components/templates/ui/accordions/accordions'
import ButtonTemplate from '@/components/templates/ui/button/button'
import { FileInput } from '@/components/templates/ui/input/file-upload'
import InputsTemplateNew from '@/components/templates/ui/input/input'
import { UpdateStates } from '@/lib/functions/update-states'
import { Edit, SearchNormal, Trash } from 'iconsax-react'

interface FaqCardProps {
  title: string
  description: string
  articleCount: number
  onAddFAQ: () => void
}
export const CategoryCard: React.FC<FaqCardProps> = ({ title, description, articleCount, onAddFAQ }) => {
  return (
    <div className="max-w-2xl mx-auto p-4 text-left ">
      <div className="border border-gray-200  w-[18rem] rounded-2xl p-3 space-y-4">
        <div className="space-y-1">
          <h2 className="font-semibold text-gray-900">{title}</h2>
          <div className="pb-5">
            <p className="text-xs text-doveGray">{description}</p>
          </div>
        </div>

        <div className="flex items-center justify-between pt-4  border-gray-200 mt-3">
          <span className="text-xs text-gray-600">{articleCount} articles</span>
          <button onClick={onAddFAQ} className="inline-flex items-center text-[0.65rem] text-locaGreen">
            <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            Add FAQ
          </button>
        </div>
      </div>
    </div>
  )
}

export const View1: React.FC<{ setMyView: (data: number) => void }> = ({ setMyView }) => {
  const dummy = [
    { title: 'General', description: 'Add the category description here', articleCount: 0 },
    { title: 'General', description: 'Add the category description here', articleCount: 0 },
    { title: 'General', description: 'Add the category description here', articleCount: 0 },
    { title: 'General', description: 'Add the category description here', articleCount: 0 },
    { title: 'General', description: 'Add the category description here', articleCount: 0 },
    { title: 'General', description: 'Add the category description here', articleCount: 0 },
    { title: 'General', description: 'Add the category description here', articleCount: 0 },
  ]
  return (
    <div>
      <div className="flex justify-between">
        <div className="text-left">
          <HeadingMain>Frequently asked questions</HeadingMain>
          <HeadingSub>Frequently asked questions</HeadingSub>
        </div>
        <div className="">
          <ButtonTemplate isText color="success" text="Add new FAQ" />
        </div>
      </div>
      <div className="mt-8 bg-white rounded-xl p-4">
        <div className="flex mt-6 flex-col items-center justify-center text-center">
          <p className="text-xl text-locaGreen text-center pb-3 font-semibold">Frequently asked questions</p>
          <div className="w-[60%] mt-3 ">
            <InputsTemplateNew classname="w-full h-10 rounded-xl" placeholder="Search" afterIcon={<SearchNormal />} />
          </div>
        </div>

        {/*  */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          {dummy.map(({ title, description, articleCount }) => (
            <>
              <div className="" onClick={() => setMyView(2)}>
                <CategoryCard
                  title={title}
                  description={description}
                  articleCount={articleCount}
                  onAddFAQ={function (): void {
                    throw new Error('Function not implemented.')
                  }}
                />
              </div>
            </>
          ))}
        </div>

        <div className="py-7 flex justify-end">
          <ButtonTemplate isText color="success" text="Add new category" />
        </div>
      </div>
    </div>
  )
}

export const View2 = ({
  modalOpen,
  modalTitle,
  modalType,
}: {
  modalOpen: (value: boolean) => void
  modalTitle: (value: string) => void
  modalType: (value: string) => void
}) => {
  const dummy = [
    {
      title: 'How do I reset my password?',
      description:
        'Go to the login page and click on "Forgot Password." Enter your email or phone number, and you will receive a link or code to reset your password.',
      articleCount: 0,
    },
    {
      title: 'How do I reset my password?',
      description:
        'Go to the login page and click on "Forgot Password." Enter your email or phone number, and you will receive a link or code to reset your password.',
      articleCount: 0,
    },
    {
      title: 'How do I reset my password?',
      description:
        'Go to the login page and click on "Forgot Password." Enter your email or phone number, and you will receive a link or code to reset your password.',
      articleCount: 0,
    },
    {
      title: 'How do I reset my password?',
      description:
        'Go to the login page and click on "Forgot Password." Enter your email or phone number, and you will receive a link or code to reset your password.',
      articleCount: 0,
    },
  ]
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="text-left">
          <HeadingMain>Frequently asked questions</HeadingMain>
          <HeadingSub>Frequently asked questions</HeadingSub>
        </div>
        <div className="">
          <ButtonTemplate
            isText
            handleClick={() => {
              modalOpen(true)
              modalType('add')
              modalTitle('Add FAQ')
            }}
            color="success"
            text="Add new FAQ"
          />
        </div>
      </div>
      <div className="mt-8 bg-white rounded-xl p-4 ">
        <div className=" justify-center flex flex-col items-center mt-3">
          <div className=" text-sm text-doveGray">
            <p>
              {`Frequently asked questions > `} <span className="text-locaGreen">General</span>{' '}
            </p>
          </div>
          <div className="mt-5 w-[50%]">
            <InputsTemplateNew classname="w-full h-10 rounded-xl" placeholder="Search" beforeIcon={<SearchNormal />} />
          </div>
        </div>
        <div className="flex mt-6 justify-between pl-4 font-semibold">
          <div className="text-locaGreen text-lg">General</div>
          <div className="text-sm">3 article</div>
        </div>
        <div className="">
          {dummy.map(({ title, description, articleCount }) => (
            <>
              <AccordionTemplateNew title={title} content={description} />
              <div className="flex pl-4 mb-2 text-sm space-x-5">
                <div className="flex cursor-pointer  ">
                  <Edit
                    onClick={() => {
                      modalOpen(true)
                      modalType('edit')
                      modalTitle('Edit FAQ')
                    }}
                    size={15}
                  />{' '}
                  <span className="text-xs">Edit</span>
                </div>
                <div className="flex cursor-pointer">
                  <Trash size={15} color="red" /> <span className="text-xs">Delete</span>{' '}
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export const FaqDrawer = () => {
  return (
    <div>
      <div className="text-locaGreen text-lg"></div>
      <div className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="question" className="block mb-3 text-sm text-locaGreen">
            Question
          </label>
          <input
            type="text"
            id="question"
            name="question"
            // defaultValue={modalView === 'add' ? '' : 'Service type'}
            className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="category" className="block mb-3 text-sm text-locaGreen">
            Category
          </label>
          <select
            id="category"
            name="category"
            // defaultValue={modalView === 'add' ? '' : 'Service type'}
            className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          >
            <option value="general">General</option>
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="answer" className="block mb-3 text-sm text-locaGreen">
            Answer
          </label>
          <textarea
            // type=" text"
            id="answer"
            name="answer"
            // defaultValue={modalView === 'add' ? '' : 'Service type'}
            className="w-full px-3 py-2  border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="attachment" className="block mb-3 text-sm text-locaGreen">
            Add attachment(optional)
          </label>

          <FileInput
            onChange={function (file: File | null): void {
              throw new Error('Function not implemented.')
            }}
          />
        </div>
      </div>
    </div>
  )
}
