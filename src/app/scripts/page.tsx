'use client'

import { Card } from '../_components/common'
import { ScriptGraph } from './_components/ScriptGraph'
import clsx from 'clsx'
import { AudioGraph } from './_components/AudioGraph'
import { useFileContext } from './_hooks/file'
import { VideoViewer } from './_components/Video'

export default function Scripts() {
  const { tracks } = useFileContext()

  return (
    <div className={clsx('grid', 'gap-8')}>
      <Card className={clsx('py-8', 'grid', 'gap-8')}>
        {tracks[0]?.kind === 'audio' && (
          <AudioGraph
            file={tracks[0]?.audio}
            graphLeftPaddingPercentage={0.25}
          />
        )}
        {tracks[0]?.kind === 'video' && (
          <div className={clsx('flex', 'justify-center')}>
            <VideoViewer file={tracks[0]?.video} />
          </div>
        )}
      </Card>
      <Card className={clsx('py-8', 'grid', 'gap-8', 'min-h-64')}>
        <ScriptGraph
          actions={tracks[0]?.script?.actions ?? []}
          graphLeftPaddingPercentage={0.25}
        />
      </Card>
    </div>
  )
}
