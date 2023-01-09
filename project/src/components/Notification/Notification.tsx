import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearNotification } from '../../store/notification/notification';
import { getNotifications } from '../../store/notification/selectors';

function Notification() {
  const notifications = useSelector(getNotifications);
  const dispatch = useDispatch();

  const renderNotification = () => {
    notifications.forEach((notification) => {
      const toastOPtions = {
        autoClose: notification.duration,
        toastId: notification.id,
        onClose: () => dispatch(clearNotification(notification.id)),
      };

      switch (notification.type) {
        case 'error':
          toast.error(notification.message, toastOPtions);
          break;
        case 'success':
          toast.success(notification.message, toastOPtions);
          break;
        case 'info':
          toast.info(notification.message, toastOPtions);
          break;
        case 'warning':
          toast.warning(notification.message, toastOPtions);
          break;
        default:
          return null;
      }
    });
  };

  return <>{renderNotification}</>;
}

export { Notification };
