import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div``

const Detail = styled.div`
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
`

const Record = styled.div`
  display: flex;

  &:not(:first-child) {
    margin-top: 30px;
  }
`

const Key = styled.p`
  width: 25%;
  font-weight: bold;
`

const ListValue = styled.ul`
  margin-left: 1.4em;
  list-style: disc;
`

const Value = styled.p``

const GoogleMapBox = styled.div`
  margin-top: 50px;
`

export const CompanyProfile: React.FC = () => {
  const data = [
    {
      key: '会社名',
      value: '合同会社Guildex',
    },
    {
      key: '資本金',
      value: '500,000円',
    },
    {
      key: '設立',
      value: '2021年5月25日',
    },
    {
      key: '最高経営責任者',
      value: '大橋 勇',
    },
    {
      key: '事業内容',
      value: 'Webサービス企画・開発・運営\nWebアプリケーション及びWebシステム受託開発',
    },
    {
      key: '住所',
      value: '〒102-0084 東京都千代田区二番町9-3 THE BASE 麹町 1F',
    },
  ]
  
  return (
    <Container>
      <Detail>
        {data.map(({ key, value }) => (
          <Record key={Math.random()}>
            <Key>{key}</Key>
            {value.split('\n').length > 1
              ? <ListValue>{value.split('\n').map(txt => <li key={txt}>{txt}</li>)}</ListValue>
              : <Value>{value}</Value>
            }
          </Record>
        ))}
      </Detail>
      <GoogleMapBox>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.6732088147423!2d139.7345331160028!3d35.685047780193464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c63637ee9ff%3A0x8cc0e2d1261eb30!2zVEhFIEJBU0Ug6bq555S6IOOCouOCu-ODg-ODiOODh-OCtuOCpOODsw!5e0!3m2!1sja!2sjp!4v1623131130297!5m2!1sja!2sjp" width="100%" height="450" allowFullScreen loading="lazy" />
      </GoogleMapBox>
    </Container>
  )
}