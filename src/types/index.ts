type Images = {
  original: { url: string }
}

export type GifProp = {
  gif: Gif
  children?: React.ReactNode
}

type Gif = {
  id: string
  title: string
  images: Images
  alt_text: string
}

export type GifsProps = {
  gifs: Gif[]
}

export type SearchBarProps = {
  value: string
  onChange: (value: string) => void
}

export type Suggest = {
  id: string
  title: string
  images: ImagesFix
}
export type ImagesFix = {
  fixed_height: { url: string; height: string; width: string }
}

export type FormProps = {
  title: string
  isLogin: boolean
  handleClick: (email: string, pass: string) => Promise<void>
}

export type FavoriteButtonProps = {
  gifId: string
}
