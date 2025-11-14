import { brightness, makeScene2D, Node } from '@motion-canvas/2d'
import { Img, Layout, Rect, Txt } from '@motion-canvas/2d/lib/components'
import { all, sequence, waitFor } from '@motion-canvas/core/lib/flow'
import { easeInOutCubic, easeOutBack } from '@motion-canvas/core/lib/tweening'
import { createRef } from '@motion-canvas/core/lib/utils'
import crt from '../shaders/crt.glsl';
import { data } from '../project';

const COLORS = [
  "#0ea5e9",
  "#10b981",
  "#8b5cf6",
  "#ec4899"
]
const BG_COLORS = [
  "#0ea5e922",
  "#10b98122",
  "#8b5cf622",
  "#ec489922"
]

const dayFormatter = new Intl.DateTimeFormat("gl-es", {
  weekday: 'long',
  day: 'numeric',
  month: 'long'
})

const timeFormatter = new Intl.DateTimeFormat("gl-es", {
  hour: 'numeric',
  minute: 'numeric',
  hour12: false
})

export default makeScene2D(function* (view) {
  const background = createRef<Rect>()
  const container = createRef<Rect>()
  const header = createRef<Layout>()
  const footer = createRef<Layout>()
  const main = createRef<Layout>()
  const title = createRef<Txt>()
  const author = createRef<Txt>()

  yield view.add(
    <Node shaders={crt}>
      {/* Light Background */}
      <Rect ref={background} width={1920 * 2} height={1080 * 2} fill={'#A6B8B6'} />

      {/* Main container */}
      <Rect
        ref={container}
        layout
        direction="column"
        alignItems="center"
        justifyContent="center"
        gap={50}
        width={1600}
        height={900}
        lineWidth={2}
        scale={1.3}
      >
        {/* Main Content */}
        <Layout
          ref={header}
          direction="row"
          alignItems="center"
          gap={40}
          y={-50}
        >
          <Layout direction="column" alignItems="center" gap={15}>
            <Txt
              ref={title}
              fontSize={68}
              opacity={0}
              fill={'#1e293b'}
              fontWeight={700}
              letterSpacing={2}
              cache
              textAlign={'center'}
            >
            {data.title}
            </Txt>
            <Txt
              ref={author}
              fontSize={38}
              opacity={0}
              fill={'#64748b'}
              fontWeight={600}
              cache
            >
              {data.author}
            </Txt>
            <Rect width={400} height={3} fill={'#0ea5e9'} radius={2} />
          </Layout>
        </Layout>
        <Layout
          ref={main}
          direction="column"
          alignItems="center"
          gap={30}
          opacity={0}
          scale={0.9}
        >
            <Txt
              width={1200}
              fontSize={35}
              fontWeight={700}
              fill={'#1e293b'}
              textAlign={"center"}
              textWrap={true}
            >
            {data.desc}
            </Txt>
            <Layout direction="row" alignItems="center" gap={30}>

              {
                data.tags.map( (tag, i) =>
                
              <Rect
                layout
                fill={BG_COLORS[i]}
                stroke={COLORS[i]}
                lineWidth={2}
                radius={10}
                padding={15}
              >
                <Txt fontSize={28} fill={COLORS[i]} filters={[brightness(0.3)]} fontWeight={600} cache>
                  {tag}
                </Txt>
              </Rect>
              )
            }
            </Layout>
          </Layout>
        {/* Footer Section */}
        <Layout
          ref={footer}
          direction="row"
          alignItems="center"
          gap={50}
          opacity={0}
          y={50}
        >
          <Rect
            layout
            fill={'rgba(14, 165, 233, 0.1)'}
            stroke={'#0ea5e9'}
            lineWidth={3}
            radius={15}
            padding={25}
          >
            <Txt
              filters={[brightness(0.3)]}
              fontSize={38}
              fill={'#0ea5e9'}
              fontWeight={700}
              cache
            >
              {dayFormatter.format(data.startDate)}
            </Txt>
          </Rect>

          <Rect
            layout
            fill={'rgba(249, 115, 22, 0.1)'}
            stroke={'#f97316'}
            lineWidth={3}
            radius={15}
            padding={25}
          >
            <Txt filters={[brightness(0.3)]} fontSize={38} fill={'#f97316'} fontWeight={700} cache>
              {timeFormatter.format(data.startDate)}
              {" - "}
              {timeFormatter.format(data.endDate)}
            </Txt>
          </Rect>
        </Layout>
      </Rect>
    </Node>
  )

  yield* sequence(
    .1,
    
    title().opacity(1, 0.4, easeInOutCubic),
    author().opacity(1, 0.4, easeInOutCubic),
    all(
      header().opacity(1, 0.3, easeInOutCubic),
      header().y(0, 0.3, easeInOutCubic)
    ),
    waitFor(0.3),

    all(
      main().opacity(1, 0.8),
      main().scale(1, 0.8, easeOutBack)
    ),

    waitFor(0.4),

    all(
      footer().opacity(1, 0.6),
      footer().y(0, 0.6, easeInOutCubic)
    ),

    // Highlight important info
  )
  yield* all(footer().scale(1.05, 0.4).to(1, 0.4)),
  yield* waitFor(1)
  yield* all(footer().scale(1.05, 0.4).to(1, 0.4)),
  yield* waitFor(1)
  yield* all(footer().scale(1.05, 0.4).to(1, 0.4)),
  yield* waitFor(1)
  yield* all(footer().scale(1.05, 0.4).to(1, 0.4)),
  yield* waitFor(1)
  yield* all(footer().scale(1.05, 0.4).to(1, 0.4)),
  yield* waitFor(1)
  yield* all(footer().scale(1.05, 0.4).to(1, 0.4)),
  yield* waitFor(1)
  yield* all(footer().scale(1.05, 0.4).to(1, 0.4)),
  yield* waitFor(1)
  yield* all(footer().scale(1.05, 0.4).to(1, 0.4)),
  yield* waitFor(1)

})
