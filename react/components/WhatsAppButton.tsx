import React from 'react'
import PropTypes from 'prop-types'

type Props = {
  logo: string
  phone: string
  message: string
  width: number
  height: number
}
const WhatsAppButton = ({ logo, phone, message, width, height }: Props) => {
  const formattedMessage = message.replace(/ /g, '%20')

  return (
    <>
      <div className="fixed bottom-2 right-2 flex flexColumn">
        <a
          href={`https://wa.me/${phone}?text=${formattedMessage}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src={logo}
            width={width}
            height={height}
            alt="logo de WhatsApp"
          />
        </a>
      </div>
    </>
  )
}

WhatsAppButton.propTypes = {
  logo: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
}

WhatsAppButton.defaultProps = {
  logo: 'mi-logo.png',
  phone: '3004507575',
  message: 'Estás comunicándote con ITGlobers, ¿en qué te podemos ayudar?',
  width: 50,
  height: 50,
}

WhatsAppButton.schema = {
  title: 'Botón de WhatsApp',
  type: 'object',
  properties: {
    logo: {
      title: 'Logo de WhatsApp',
      type: 'string',
      widget: {
        'ui:widget': 'image-uploader',
      },
    },
    phone: {
      title: 'Teléfono',
      description: 'Agrega por favor el número de teléfono',
      type: 'string',
    },
    message: {
      title: 'Mensaje',
      description: 'Agrega por favor un mensaje para tu cliente',
      type: 'string',
      widget: {
        'ui:widget': 'textarea',
      },
    },
    width: {
      title: 'Mensaje',
      description: 'Agrega por favor un mensaje para tu cliente',
      type: 'number',
    },
    height: {
      title: 'Mensaje',
      description: 'Agrega por favor un mensaje para tu cliente',
      type: 'number',
    },
  },
}
export default WhatsAppButton
