interface ModuleImportInterface {
    default: {
        src: string
    }
}

interface GalleryItem {
    imgFile: string;
    projectId: string;
    imgMeta?: unknown;
}


const imgBase = '../../static/images/gallery/'
const suffix = '@0.5x.jpg'

const gallery: GalleryItem[] = [
    { imgFile: 'BHZ-2', projectId: 'behavioral-health-visualization' },
    { imgFile: 'bci-1', projectId: 'bci' },
    { imgFile: 'converge-1', projectId: 'convergence' },
    { imgFile: 'biomed-2', projectId: 'biomed-reality' },
    { imgFile: 'toaster-3', projectId: 'toaster' },
    { imgFile: 'bci-2', projectId: 'bci' },
    { imgFile: 'Eventide-2', projectId: 'eventide' },
    { imgFile: 'converge-4', projectId: 'convergence' },
    { imgFile: 'bci-3', projectId: 'bci' },
    { imgFile: 'toaster-1', projectId: 'toaster' },
    { imgFile: 'life-1', projectId: 'life' },
    { imgFile: 'IC-1', projectId: 'inflorescent-crescendo' },
    { imgFile: 'Jabil-5', projectId: 'jabil-bluesky-center' },
    { imgFile: 'life-2', projectId: 'life' },
    { imgFile: 'Miraj-5', projectId: 'miraj' },
    { imgFile: 'life-3', projectId: 'life' },
    { imgFile: 'toaster-2', projectId: 'toaster' },
    { imgFile: 'qronicles-2', projectId: 'qronicles' },
    { imgFile: 'bci-4', projectId: 'bci' },
    { imgFile: 'WGN-4', projectId: 'whos-got-next' },
];

const galleryMap = new Map(gallery.map(img => [img.imgFile, img]))

const getFullFileName = (picture: GalleryItem) => `${imgBase}${picture.imgFile}${suffix}`

const importGlob = import.meta.glob('../../static/images/gallery/*');
const loadMeta = async (picture: GalleryItem) => {
    // Let errors be thrown!
    picture.imgMeta = await importGlob[getFullFileName(picture)]()
}

export const getImage = async (imageFileName: string) => {
    const picture = galleryMap.get(imageFileName)
    if (picture === undefined) {
        throw new Error(`Image not found: ${imageFileName}`);
    }

    await loadMeta(picture)
    return (picture.imgMeta as ModuleImportInterface).default.src
}

export const getProjectId = (imageFileName: string) => {
    const picture = galleryMap.get(imageFileName)
    if (picture === undefined) {
        throw new Error(`Image not found: ${imageFileName}`);
    }

    return picture.projectId
}