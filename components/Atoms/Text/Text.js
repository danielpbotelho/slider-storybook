import { createElement } from 'react'

const variants = {
  title: ' typo-heading2 sm:typo-heading1',
  paragraph: ' typo-paragraph2 sm:typo-paragraph1',
  'text-detail': 'typo-details text-neutral-600',
}

export const Text = ({
  as = 'p',
  additionalClasses = '',
  variant = '',

  children,
  ...props
}) => {
  const classNameProps =
    ' ' + (variant ? variants[variant] : '') + ' ' + additionalClasses

  return createElement(as, { ...props, className: classNameProps }, children)
}
