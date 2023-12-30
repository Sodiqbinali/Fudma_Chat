import React from 'react'
import { Modal, useMantineTheme } from '@mantine/core'

const ProfileModal = ( modalOpened, setModalOpened ) => {
    const theme = useMantineTheme();
    console.log(modalOpened)
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
     <form className="infoForm" >
        <h3>Your Info</h3>
        <div>
          <input
            
            type="text"
            placeholder="First Name"
            name="firstname"
            className="infoInput"
          />
          <input
           
            type="text"
            placeholder="Last Name"
            name="lastname"
            className="infoInput"
          />
        </div>

        <div>
        <input
            
            type="text"
            placeholder="Department"
            name="department"
            className="infoInput"
          />
        </div>

        <div>
          <input
            
            type="text"
            placeholder="Come From"
            name="livesIn"
            className="infoInput"
          />
          <input
            
           
            type="text"
            className="infoInput"
            placeholder="Relationship status"
            name="relationship"
          />
        </div>

        <div>
          Profile image
          <input type="file" name="profileImage"  />
          Cover image
          <input type="file" name="coverImage"  />
        </div>

        <button className="button infoButton" type="submit">
          Update
        </button>
      </form>
    </Modal>
  )
}

export default ProfileModal
