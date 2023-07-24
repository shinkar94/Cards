import { ComponentProps, FC } from 'react'

import { clsx } from 'clsx'

import { Typography } from '../typography'

import s from './table.module.scss'

import playSvg from '../../../assets/icons/play.svg'
import editSvg from '../../../assets/icons/edit.svg'
import trashSvg from '../../../assets/icons/trash.svg'

export type RootProps = ComponentProps<'table'>

export const Root: FC<RootProps> = ({ className, ...rest }) => {
  const classNames = {
    table: clsx(className, s.table),
  }

  return <table className={classNames.table} {...rest} />
}

export type HeadProps = ComponentProps<'thead'>

export const Head: FC<HeadProps> = props => {
  return <thead {...props} />
}

export type BodyProps = ComponentProps<'tbody'>

export const Body: FC<BodyProps> = props => {
  return <tbody {...props} />
}

export type RowProps = ComponentProps<'tr'>

export const Row: FC<RowProps> = ({ className, ...props }) => {
  const classNames = {
    row: clsx(className, s.row),
  }
  return <tr className={classNames.row} {...props} />
}

export type HeadCellProps = ComponentProps<'th'>

export const HeadCell: FC<HeadCellProps> = ({ className, ...rest }) => {
  const classNames = {
    headCell: clsx(className, s.headCell),
  }

  return <th className={classNames.headCell} {...rest} />
}

export type CellProps = ComponentProps<'td'>

export const Cell: FC<CellProps> = ({ className, ...rest }) => {
  const classNames = {
    cell: clsx(className, s.tableCell),
  }

  return <td className={classNames.cell} {...rest} />
}

export const Empty: FC<ComponentProps<'div'> & { mt?: string; mb?: string }> = ({
  className,
  mt = '89px',
  mb,
}) => {
  const classNames = {
    empty: clsx(className, s.empty),
  }

  return (
    <Typography className={classNames.empty} style={{ marginTop: mt, marginBottom: mb }}>
      Пока тут еще нет данных! :(
    </Typography>
  )
}

type TypeTestData = {
  id: number
  name: string
  cardsNumber: number
  lastDate: string
  createdBy: string
}

const testData = [
  { id: 1, name: 'Pack Name', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 2, name: 'Pack Name', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 3, name: 'Pack Name', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 4, name: 'Pack Name', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 5, name: 'Pack Name', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 6, name: 'Pack Name', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
  { id: 7, name: 'Pack Name', cardsNumber: 4, lastDate: '24.07.2023', createdBy: 'Ivan Ivanov' },
]
export const Table = () => {
  return (
    <Root>
      <Head>
        <Row>
          <HeadCell>Name</HeadCell>
          <HeadCell>Cards</HeadCell>
          <HeadCell>Last Updated</HeadCell>
          <HeadCell>Created by</HeadCell>
          <HeadCell></HeadCell>
        </Row>
      </Head>
      <Body>
        {testData.map(el => {
          return (
            <Row key={el.id}>
              <Cell>{el.name}</Cell>
              <Cell>{el.cardsNumber}</Cell>
              <Cell>{el.lastDate}</Cell>
              <Cell>{el.createdBy}</Cell>
              <Cell>
                <img src={playSvg} alt="play" />
                <img src={editSvg} alt="edit" />
                <img src={trashSvg} alt="trash" />
              </Cell>
            </Row>
          )
        })}
      </Body>
    </Root>
  )
}
