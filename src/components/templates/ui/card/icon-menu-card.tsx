import React from 'react'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { GenericActionMenu } from '../actions/page'
import { Clock, Location } from 'iconsax-react'
import AvatarGroup from '../avatar-group/group'
import { GoDotFill } from 'react-icons/go'

type ContentItem = {
  id: number
  imageSrc?: string
  title: string
  header?: string
  duration: string
  published?: string
  location?: string
  actions: {
    label: string
    icon: React.ReactNode
    onClick: (row: any) => void
    color?: string
  }[]
}

interface IconMenuCardProps {
  contents: ContentItem[]
  image?: boolean
  upcoming?: boolean
  avatarGroup?: {
    alt: string
    src: string
  }[]
}

const IconMenuCard: React.FC<IconMenuCardProps> = ({ contents, image, upcoming, avatarGroup }) => {
  return (
    <div className="w-full h-52 mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {contents.map((content) => (
        <div key={content.id} className="w-80 rounded-2xl p-3 shadow bg-white border border-borderColor flex flex-col">
          {image && (
            <>
              <div className="w-full">
                {image && content.imageSrc && (
                  <div className="w-full">
                    <Image
                      src={content.imageSrc}
                      width={212}
                      height={112}
                      style={{
                        width: 'auto',
                        height: 'auto',
                      }}
                      alt="image"
                    />
                  </div>
                )}
                <div className="w-full flex justify-between items-center mt-5">
                  <div className="flex flex-col items-start">
                    <Typography variant="body2" sx={{ fontSize: 12, lineHeight: 2, fontFamily: 'Poppins' }}>
                      {content.title}
                    </Typography>
                    <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#199675', fontSize: 11 }}>
                      <Clock size={15} className="mr-1" />
                      {content.duration}
                    </Typography>
                  </div>
                  <GenericActionMenu row={content} actions={content.actions} />
                </div>
              </div>
            </>
          )}
          {upcoming && (
            <div className="space-y-5 px-3 pt-5">
              <Typography
                variant="body2"
                sx={{ color: '#199675', fontSize: 11, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: 0.3 }}
              >
                <GoDotFill />
                {content.header}
              </Typography>
              <div className="space-y-5">
                <Typography variant="body2" sx={{ lineHeight: 2, fontFamily: 'Poppins', fontWeight: 600 }}>
                  {content.title}
                </Typography>
                <div className="flex justify-between items-centere">
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#AAAAAA', fontSize: 11 }}>
                    <Clock size={15} className="mr-1" />
                    {content.duration}
                  </Typography>
                  <Typography variant="body2" sx={{ display: 'flex', alignItems: 'center', color: '#AAAAAA', fontSize: 11 }}>
                    <Location size={15} className="mr-1" />
                    {content.location}
                  </Typography>
                </div>
                <div className="w-full flex items-center justify-between">
                  {avatarGroup && (
                    <AvatarGroup
                      avatars={avatarGroup}
                      max={4}
                      componentsProps={{
                        additionalAvatar: {
                          onMouseEnter: () => console.log('Mouse enter'),
                          onMouseLeave: () => console.log('Mouse leave'),
                        },
                      }}
                    />
                  )}
                  <GenericActionMenu row={content} actions={content.actions} />
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

export default IconMenuCard
