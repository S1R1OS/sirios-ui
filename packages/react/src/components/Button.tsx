import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',
  padding: '0 $4',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$sirios300',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$sirios500',

        '&:not(:disabled):hover': {
          background: '$orange300',
        },

        '&:disabled': {
          backgroundColor: '$orange100',
        },
      },

      secondary: {
        color: '$orange300',
        border: '2px solid $sirios500',

        '&:not(:disabled):hover': {
          background: '$sirios500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$orange800',

        '&:not(:disabled):hover': {
          color: '$orange500',
        },

        '&:disabled': {
          color: '$orange300',
        },
      },
    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
