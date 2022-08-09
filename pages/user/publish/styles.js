import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles ((theme) => ({
   
    boxContainer: {
        paddingBottom:theme.spacing(3),
        
    },
    box: {
        backgroundColor: theme.palette.background.white,
        padding: theme.spacing(3),
        boxShadow: '0 3px 5px 2px rgba(195,195,195,0.3)',
    },
    inputLabel: {
        fontWeight: 400,
        color: theme.palette.primary.main,
    },
    

}))

export default useStyles