import { SvgIconProps } from '../types'

export const SvgIcon = ({ src, width, height, className }: SvgIconProps) => {
    if (src === null) {
        return null
    }

    return <img className={className} src={`/images/${src}`} alt={src} width={width} height={height} draggable={false} />
}
